"use server";

import jwt from "jsonwebtoken";
import { createTransport } from "nodemailer";

export type JwtPayload = {
  email: string;
};

export async function sendVerificationEmail(to: string): Promise<boolean> {
  const query = {
    query: `query CheckActiveUserMembership {
  users(filter: { 
    email: { eq: "${to}" },
    active: { eq: true }
  }) {
    nodes {
      id
      name
      email
    }
  }
}
`,
  };
  const response = await fetch("https://api.linear.app/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.LINEAR_API_KEY as string,
    },
    body: JSON.stringify(query),
  });

  const { data } = await response.json();

  if (!data.users.nodes[0]?.email) return false;

  const token = jwt.sign(
    {
      email: to,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  const verificationLink = `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/api/auth/verify?token=${token}`;

  try {
    const transporter = createTransport({
      host: process.env.MAIL_SMTP,
      pool: true,
      port: parseInt((process.env.MAIL_SMTP_PORT || 465) as string),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify((error: any) => {
      if (error) console.log("Transporter verification error:", error);
    });

    transporter.sendMail(
      {
        to,
        from: `Webadmin - Point Blank <${process.env.MAIL_USER}>`,
        subject: "Point Blank - Login Link",
        html: `<p>Hello,</p>
<p>Click the link below to sign in to the admin panel:</p>
<a href="${verificationLink}">Sign In to Admin Panel</a>
<p>This link will expire in 15 minutes.</p>
<p>If you did not request this, please ignore this email.</p>
<p>Best regards,<br/>Team Point Blank</p>`,
        text: `Hello,\n\nClick the link below to sign in to the admin panel:\n\n${verificationLink}\n\nThis link will expire in 15 minutes.\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nTeam Point Blank`,
      },
      (error: any, info: any) => {
        if (error) console.error("Error sending email:", error);
        return info.response.includes("received");
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return true;
}

export async function verifyLoginToken(
  token: string,
): Promise<string | boolean> {
  try {
    const user: JwtPayload | null = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload | null;
    if (!user) return false;

    return jwt.sign(
      {
        email: user.email,
      },
      process.env.SESSION_SECRET as string,
      {
        expiresIn: "1d",
      },
    );
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return false;
    }
    console.error("Token verification error:", error);
    return false;
  }
}

export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const user: JwtPayload | null = jwt.verify(
      token,
      process.env.SESSION_SECRET as string,
    ) as JwtPayload | null;
    console.log(user);
    if (!user) return null;
    return user;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return null;
    }
    console.error("Token verification error:", error);
    return null;
  }
}
