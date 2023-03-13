<template>
    <form class="w-full max-w-sm mx-auto mt-10">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label
                    for="username"
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >Username</label
                >
            </div>
            <div class="md:w-2/3">
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label
                    for="password"
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >Password</label
                >
            </div>
            <div class="md:w-2/3">
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button
                    class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Sign In
                </button>
            </div>
        </div>
    </form>
</template>
