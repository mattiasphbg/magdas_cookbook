import { Input } from "src/app/components/ui/input";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="grid gap-6 lg:gap-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lunch Recipes
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Kickstart your afternoon with a satisfying lunch. Explore our
              selection of lunch recipes to discover the ideal meal for your
              midday break.
            </p>
            <div className="mt-4.5 w-full max-w-[400px]">
              <Input
                className="w-full border-gray-200 shadow-sm dark:border-gray-800"
                placeholder="Search recipes"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="xl:grid-cols-3xl grid grid-cols-1 gap-6 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="group overflow-hidden rounded-lg border border-gray-200 border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
              href="#"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Thumbnail"
                  className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                  <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-xl font-semibold">
                  Classic Pancakes
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  The perfect fluffy pancakes. Add your favorite toppings and
                  enjoy.
                </p>
              </div>
            </Link>
            <Link
              className="group overflow-hidden rounded-lg border border-gray-200 border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
              href="#"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Thumbnail"
                  className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                  <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-xl font-semibold">
                  Avocado Toast
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  A simple and delicious avocado toast recipe. Perfect for a
                  quick breakfast.
                </p>
              </div>
            </Link>
            <Link
              className="group overflow-hidden rounded-lg border border-gray-200 border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
              href="#"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Thumbnail"
                  className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                  <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-xl font-semibold">
                  Blueberry Muffins
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  Soft and moist blueberry muffins. Perfect with a cup of coffee
                  or tea.
                </p>
              </div>
            </Link>
            <Link
              className="group overflow-hidden rounded-lg border border-gray-200 border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
              href="#"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Thumbnail"
                  className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                  <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-xl font-semibold">
                  French Toast
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  Classic French toast recipe. Top with syrup, fresh fruits, or
                  whipped cream.
                </p>
              </div>
            </Link>
            <Link
              className="group overflow-hidden rounded-lg border border-gray-200 border-gray-200 shadow-sm hover:shadow-md dark:border-gray-800"
              href="#"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt="Thumbnail"
                  className="h-400 aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="bg-rgba-0000/70 absolute inset-0 flex items-center justify-center p-4 text-center transition-colors">
                  <ChevronRightIcon className="h-6 w-6 translate-x-2 text-gray-50 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-xl font-semibold">
                  Breakfast Burrito
                </h3>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  Easy and delicious breakfast burrito. Perfect for a quick and
                  satisfying breakfast.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
