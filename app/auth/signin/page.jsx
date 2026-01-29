import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  console.log(session);
  
  if (session) {
    redirect("/profile");
  }

  return (
    <main className="min-h-dvh bg-linear-to-br from-sky-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-sky-200/70 p-6 md:p-10 space-y-8">
        
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Sign in to your account
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <form
            action={async (formData) => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 
              rounded-xl hover:bg-sky-50 hover:border-sky-300 transition-all focus:ring-2 
              focus:ring-sky-400 focus:ring-offset-2 shadow-sm">
              <FcGoogle className="text-2xl" />
              <span className="text-base font-medium text-gray-800">Continue with Google</span>
            </button>
          </form>

          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 
              rounded-xl hover:bg-sky-50 hover:border-sky-300 transition-all focus:ring-2 
              focus:ring-sky-400 focus:ring-offset-2 shadow-sm">
              <FaGithub className="text-2xl" />
              <span className="text-base font-medium text-gray-800">Continue with GitHub</span>
            </button>
          </form>

          <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 
            rounded-xl hover:bg-sky-50 hover:border-sky-300 transition-all focus:ring-2 
            focus:ring-sky-400 focus:ring-offset-2 shadow-sm">
            <FaApple className="text-2xl" />
            <span className="text-base font-medium text-gray-800">Continue with Apple</span>
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600 text-base">
            New here?{" "}
            <Link
              href="/register"
              className="text-sky-600 hover:text-sky-700 font-semibold underline"
            >
              Create an account
            </Link>
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;