export default function Success() {
    return (
        <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div class="fixed top-[-50px] hidden lg:block">
                <img
                    src="/images/signup-image.png"
                    class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    alt="Hero"
                />
            </div>
            <div class="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div class="w-[300px]">
                    <img
                        src="/images/moonton-white.svg"
                        class="mb-[200px]"
                        alt="Logo"
                    />
                    <div class="mb-[50px]">
                        <div class="font-semibold text-[26px] mb-3">
                            Payment Success
                        </div>
                        <p class="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <div class="grid gap-[14px]">
                        <a
                            href={route("user.dashboard.index")}
                            class="rounded-2xl bg-alerange py-[13px] text-center"
                        >
                            <span class="text-base font-semibold">
                                Start Watching
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
