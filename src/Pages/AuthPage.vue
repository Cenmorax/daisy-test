<template>
    <div class="flex items-center justify-center h-full w-full">
        <div
            class="Card flex flex-col w-1/2 h-fit bg-base-300 items-center rounded-xl p-5 m-3"
        >
            <h1 class="text-3xl font-bold my-3 mx-5">Authorization</h1>

            <div class="flex flex-col gap-2">
                <label class="input input-bordered flex items-center gap-2">
                    <b>Login</b>
                    <input type="text" class="grow" placeholder='"Amogus"' />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    <b>Name</b>
                    <input
                        type="text"
                        class="grow"
                        placeholder="Bond, James Bond"
                    />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    <b>Email</b>
                    <input
                        type="email"
                        class="grow"
                        placeholder="SussyBaka@mail.com"
                    />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    <b>Password</b>
                    <input
                        type="password"
                        class="grow"
                        placeholder="IL0V3mYLiTtL3P0ny"
                    />
                </label>
                <div class="flex flex-row justify-center gap-2 pb-5">
                    <button class="btn btn-primary w-1/2">Register</button>
                    <button class="btn btn-primary btn-outline w-1/2">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
