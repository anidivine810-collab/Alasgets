import { FaRegHeart } from "react-icons/fa";
import { PiClockCountdownLight } from "react-icons/pi";
import { RiCoupon3Line } from "react-icons/ri";
import { PiCreditCardDuotone } from "react-icons/pi";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const menuItems = [
  "Overview",
  "Orders",
  "Payments",
  "Returns/refund",
  "Feedback",
  "Settings",
  "Message center",
  "Help center",
];

const quickActions = [
  { icon: FaRegHeart, label: "Wish List" },
  { icon: PiClockCountdownLight, label: "Viewed" },
  { icon: RiCoupon3Line, label: "Coupons" },
  { icon: PiCreditCardDuotone, label: "Shopping credit" },
];

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }

  const user = session.user;

  return (
    <main className="min-h-dvh bg-linear-to-br from-sky-50 to-blue-50 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile-first layout */}
        <div className="pt-8 lg:pt-10">
          {/* Profile header */}
          <div className="mb-6 rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt="Profile"
                className="h-16 w-16 rounded-full border-4 border-white shadow-md sm:h-20 sm:w-20"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl">
                  {user.name}
                </h1>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

        
          <div className="mb-8 rounded-xl border bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {quickActions.map((item, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 rounded-lg py-4 text-gray-700 transition hover:bg-gray-50 active:bg-gray-100"
                >
                  <item.icon className="text-3xl sm:text-4xl" />
                  <span className="text-sm font-medium sm:text-base">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar menu –  becomes full-width on mobile */}
          <div className="rounded-xl border bg-white shadow-sm">
            <h2 className="border-b border-gray-200 px-6 py-4 text-center text-xl font-semibold lg:hidden">
              Account Menu
            </h2>

            <div className="lg:flex lg:gap-8">
              {/* Left sidebar – hidden on mobile, visible from lg+ */}
              <div className="hidden w-full border-r border-gray-200 lg:block lg:w-72 xl:w-80">
                <div className="p-3">
                  {menuItems.map((item) => (
                    <div
                      key={item}
                      className="cursor-pointer rounded-lg px-5 py-3.5 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile menu */}
              <div className="divide-y divide-gray-100 lg:hidden">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <span>{item}</span>
                    <span className="text-gray-400">→</span>
                  </button>
                ))}
              </div>

              {/*content area */}
              <div className="flex-1 p-6 lg:p-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">
                  Welcome back, {user.name?.split(" ")[0]}
                </h2>
                <div className="rounded-lg bg-gray-50 p-6 text-gray-600">
                  <p className="mb-3">This is your account overview area.</p>
                  <p>Recent orders, recommendations, and quick stats will appear here.</p>
                  <p className="mt-6 text-sm italic">
                    (Currently selected menu item content would go here)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default page