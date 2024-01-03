import { SignUp } from "@clerk/nextjs";
 
export default function SignUpPage() {
  return <SignUp afterSignUpUrl= "/new-user" redirectUrl= "/new-user" />;
} 