import { Button } from "@/components/ui/button";
import getContactedUser from "../actions/getContactedUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

type ContactedUserProps = {};

const ContactedUser: React.FC<ContactedUserProps> = async () => {
  const contacts = await getContactedUser();

  console.log(contacts);

  return (
    <div className="bg-slate-900 min-h-[calc(100vh-136px)] h-full mt-[20px] p-6 rounded-md">
      <h1 className="text-2xl font-extrabold text-primary mb-8">
        Contacted Users
      </h1>

      {contacts?.length === 0 ? (
        <div className="flex h-[500px] items-center justify-center">
          <h3 className="text-xl font-extrabold">No Results found!</h3>
        </div>
      ) : (
        <div className="flex items-center gap-4 ">
          {contacts?.map((contact) => (
            <Card key={contact.id} className="w-[350px]">
              <CardHeader>
                <CardTitle>{contact.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="">Name:</span>
                  <p className="text-[16px] text-muted-foreground">
                    {contact?.name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">Phone Number:</span>
                  <p className="text-[16px] text-muted-foreground">
                    {contact?.phoneNumber}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">Email:</span>
                  <p className="text-[16px] text-muted-foreground">
                    {contact?.email}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button className="text-white flex-1" asChild>
                  <Link href={`tel:+91 ${contact?.phoneNumber}`}>
                    <Phone size="16px" className="mr-2" /> Call
                  </Link>
                </Button>
                <Button className="text-white flex-1" asChild>
                  <Link href={`mailto:${contact?.email}`}>
                    <Mail size="16px" className="mr-2" /> Email
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default ContactedUser;
