import MembersModel, { type Members } from "@/lib/db/models/members";

export const getAllMembers = async (): Promise<Members[]> => {
  try {
    const members = await MembersModel.find();
    return members as Members[];
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

export const getMemberById = async (id: string): Promise<Members | null> => {
  try {
    const member = await MembersModel.findById(id);
    return member as Members | null;
  } catch (error) {
    console.error(`Error fetching member with id ${id}:`, error);
    return null;
  }
};

export const createMember = async (
  memberData: Omit<Members, "_id">,
): Promise<Members | null> => {
  try {
    const newMember = new MembersModel(memberData);
    const savedMember = await newMember.save();
    return savedMember as Members;
  } catch (error) {
    console.error("Error creating member:", error);
    return null;
  }
};

export const updateMember = async (
  memberData: Members,
): Promise<Members | null> => {
  try {
    const updatedMember = await MembersModel.findByIdAndUpdate(
      memberData._id,
      memberData,
      {
        new: true,
      },
    );
    return updatedMember as Members | null;
  } catch (error) {
    console.error(`Error updating member with id ${memberData._id}:`, error);
    return null;
  }
};

export const deleteMember = async (id: string): Promise<boolean> => {
  try {
    await MembersModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error(`Error deleting member with id ${id}:`, error);
    return false;
  }
};
