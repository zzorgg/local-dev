import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20" id='features'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-3xl font-medium lg:text-4xl">The foundation for local development management</h2>
                    <p>Local Dev is a platform designed to streamline and enhance local development workflows for developers and teams.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast</h3>
                        </div>
                        <p className="text-sm">Built using vite and react with shadcn/tailwindcss</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-sm">Daily development workflows like aws s3, docker and more</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-sm">We use clerk and firebase auth for authentication</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Customization</h3>
                        </div>
                        <p className="text-sm">Add more tools for local setup like Kubernetes, and more.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Control</h3>
                        </div>
                        <p className="text-sm">Control everything from a dedicated admin dashboard</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Built for AI Agents</h3>
                        </div>
                        <p className="text-sm">Written by keeping AI agents and MCP servers in mind</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
