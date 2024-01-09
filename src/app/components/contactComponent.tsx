export default function ContactComponent() {
    return (
        <div className="">
            <div className="flex flex-row justify-center gap-12">
                <div className="flex flex-col justify-center">
                    <p className="py-4 font-inter tracking-tight font-semibold text-gray-700">Have a question or want to get in touch?<br/>Feel free to send me an email or use the form here.</p>
                    <p className="font-nunito_sans tracking-wider font-semibold text-gray-500">James Richmond</p>
                    <p className="font-nunito_sans tracking-wider font-semibold text-gray-500">jblackenmusic@gmail.com</p>
                    <p className="font-nunito_sans tracking-wider font-semibold text-gray-500">(385) 290-5183</p>
                </div>
                <form className="flex flex-col w-[456px]">
                    <label className="text-sm font-nunito_sans font-medium text-gray-500" htmlFor="firstName">First Name</label>
                    <input className="rounded h-8 mb-3" name="firstName"></input>
                    <label className="text-sm font-nunito_sans font-medium text-gray-500" htmlFor="firstName">Last Name</label>
                    <input className="rounded h-8 mb-3" name="lastName"></input>
                    <label className="text-sm font-nunito_sans font-medium text-gray-500" htmlFor="firstName">Email</label>
                    <input className="rounded h-8 mb-3" name="email"></input>
                    <label className="text-sm font-nunito_sans font-medium text-gray-500" htmlFor="firstName">Message</label>
                    <textarea className="rounded h-24 mb-3" name="message"></textarea>
                </form>
            </div>
        </div>
    )
}