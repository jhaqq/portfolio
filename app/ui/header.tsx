export default function Header() {
    return (
        <div className="h-15 flex w-full bg-gray-50 py-4 px-10 justify-between fixed opacity-90 z-10">
            <div>
                <p className="text-lg">Jacob</p>
            </div>
            <div className="flex gap-7">
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Skills</p>
                <p>Contact</p>
            </div>
        </div>
    )
}