import Image from "next/image";
import Link from "next/link";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="grid w-full h-[100vh] grid-cols-1 md:grid-cols-3">
      <LoginForm />
      {/* Gradient */}
      <div className="relative hidden w-full overflow-hidden md:col-span-2 rounded-l-2xl md:block">
        {/* Overlay */}
        <div className="absolute inset-0 z-10" />
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-8">
          <div className="mb-24">
            <Image
              className="max-w-[200px]"
              width={296}
              height={77}
              src="/nimble-logo.png"
              alt="nimble-logo"
            />
            <div className="mt-4">
              <div className="text-2xl font-large">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  ChatNBX
                </span>{" "}
                <span className="text-neutral-600 dark:text-neutral-400">
                  is the
                  revolutionary technology of {" "}
                </span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  NimbleBox.AI !!
                </span>{" "}
              </div>
              <div className="font-large">
                <span className="text-neutral-600 dark:text-neutral-400">
                ChatNBX is an advanced application that is powered by {" "}
                </span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  OpenAI.
                </span>{" "}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
