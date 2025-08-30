<template>
    <div
        class="p-8 ml-0 text-5xl text-center sm:ml-12 font-roboto sm:text-left"
        data-aos="my-slide-right"
    >
        <h1
            class="inline-block w-auto pb-1 text-3xl font-bold border-b-2 border-gray-700 sm:text-5xl"
        >
            Contact
        </h1>
    </div>
    <section
        id="contact"
        class="px-4 py-16 sm:px-24 font-roboto mt-[-44px]"
        data-aos="my-slide-down"
    >
        <div class="max-w-6xl mx-auto">
            <!-- Container -->
            <div
                class="flex flex-col items-start justify-between gap-12 p-8 bg-white border-2 border-gray-300 shadow-lg lg:flex-row lg:items-center sm:p-12 dark:border-gray-700 rounded-xl dark:bg-black"
            >
                <!-- LEFT SIDE: TEXT -->
                <div class="flex-1 space-y-4">
                    <h2
                        class="text-2xl font-extrabold text-center text-gray-900 sm:text-6xl dark:text-white sm:text-left"
                    >
                        Let's Talk!
                    </h2>
                    <p
                        class="text-gray-700 tex-md sm:text-lg dark:text-gray-300"
                    >
                        Have a question, proposal, or just want to say hello?
                        I'd love to hear from you. Message me and I’ll get back
                        to you as soon as possible.
                    </p>
                </div>

                <!-- RIGHT SIDE: CONTACT FORM -->
                <div class="flex-1 w-full max-w-md">
                    <form
                        action="https://formsubmit.co/madelosylvest@gmail.com"
                        method="POST"
                        class="flex flex-col gap-4"
                    >
                        <!-- Hidden FormSubmit settings -->
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="hidden"
                            name="_next"
                            value="https://my-portfolio-resume-g5k7ksa74-sylvests-projects.vercel.app/"
                        />

                        <div class="flex flex-col gap-1">
                            <label
                                class="font-semibold text-gray-800 dark:text-gray-200"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                class="p-3 text-gray-900 bg-white border-2 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div class="flex flex-col gap-1">
                            <label
                                class="font-semibold text-gray-800 dark:text-gray-200"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                class="p-3 text-gray-900 bg-white border-2 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div class="flex flex-col gap-1">
                            <label
                                class="font-semibold text-gray-800 dark:text-gray-200"
                            >
                                Message:
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your message here..."
                                class="p-3 text-gray-900 bg-white border-2 border-gray-300 rounded-md resize-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="inline-block w-full px-4 py-2 mb-4 font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>
