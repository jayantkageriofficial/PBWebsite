"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function MemberForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

const [fileName, setFileName] = useState<string>("")
const handleFileChange = (e) => {
  const file = e.target.files?.[0]
  if (file) {
    setFileName(file.name)
    console.log("File selected:",file)
  }
}
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <Card className="bg-pbsurface border-pbborder">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-2xl">Add Member</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="name" className="text-white">
                  Name
                </FieldLabel>
                <Input
                  id="name"
                  placeholder="Name"
                  required
                  className="bg-pbpages border-pbborder text-white"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-white">Year</FieldLabel>
                  <Select required>
                    <SelectTrigger className="bg-pbpages border-pbborder text-white">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-pbsurface border-pbborder text-white">
                      <SelectItem value="First Year">1st Year</SelectItem>
                      <SelectItem value="Second Year">2nd Year</SelectItem>
                      <SelectItem value="Third Year">3rd Year</SelectItem>
                      <SelectItem value="Fourth Year">4th Year</SelectItem>
                      <SelectItem value="Alumni">Alumni</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="role" className="text-white">
                    Role
                  </FieldLabel>
                  <Input
                    id="role"
                    placeholder="Dev"
                    required
                    className="bg-pbpages border-pbborder text-white"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="company" className="text-white">
                  Company
                </FieldLabel>
                <Input
                  id="company"
                  placeholder="Company (Optional)"
                  className="bg-pbpages border-pbborder text-white"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="linkedin" className="text-white">
                  LinkedIn URL
                </FieldLabel>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://..."
                  className="bg-pbpages border-pbborder text-white"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="image" className="text-white">
                  Image
                </FieldLabel>
                <div className="relative">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-pbsurface border-0 text-white file:mr-4 file:mt-2 file:py-1 h-12 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pbgreen file:text-black  cursor-pointer"
                  />
                  {fileName && (
                    <p className="mt-2 text-xs text-pbgreen">
                      Selected: {fileName}
                    </p>
                  )}
                </div>
              </Field>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-pbgreen text-black hover:opacity-90 font-bold"
                >
                  Add Member
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
