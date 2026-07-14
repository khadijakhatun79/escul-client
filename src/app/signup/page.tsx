import { SignupForm } from "@/components/forms/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              N
            </div>
            NextMart
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignupForm />
          </div>
        </div>
      </div>

      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]"
        />
      </div>
    </div>
  );
}
