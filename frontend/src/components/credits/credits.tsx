export default function CreditsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="text-4xl font-medium">Credits & Attributions</h2>
                <p className="text-muted-foreground">Thank you to the libraries, designers, and teams whose work makes this project possible.</p>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="font-semibold">Project</h3>
                        <p className="text-muted-foreground">Built and maintained by <strong>zzorgg</strong>.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Open-source libraries</h3>
                        <ul className="list-disc pl-5 text-muted-foreground">
                            <li>React</li>
                            <li>Vite</li>
                            <li>Tailwind CSS</li>
                            <li><code>lucide-react</code> (icons)</li>
                            <li>react-router-dom</li>
                            <li>sonner</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Logos & Images</h3>
                        <p className="text-muted-foreground">Logos for Google Gemini, Zed, Supabase and other provider logos are used for demonstration purposes. Trademarks and logos are the property of their respective owners.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Assets</h3>
                        <p className="text-muted-foreground">Images in <code>/public</code> and <code>/src/assets</code> were included with the template or added by the project author.</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold">Licenses</h3>
                    <p className="text-muted-foreground">Dependencies and third-party libraries are licensed under their respective open-source licenses (see <code>package-lock.json</code> or each project's repository for details).</p>
                </div>

                <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p className="text-muted-foreground">To request removal or changes to an attribution, please contact the project owner (zzorgg).</p>
                </div>
            </div>
        </section>
    )
}
