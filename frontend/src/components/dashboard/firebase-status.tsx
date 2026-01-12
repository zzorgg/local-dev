import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    RefreshCcw,
    ExternalLink,
    Copy,
    CheckCircle2,
    AlertCircle,
    Terminal
} from "lucide-react"

type Status = {
    ok: boolean
    code?: number
    text?: string
    timeMs?: number
}

export default function FirebaseStatus() {
    const [status, setStatus] = useState<Status | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    const url = "http://127.0.0.1:5000/"

    const check = useCallback(async () => {
        setLoading(true)
        setError(null)
        const start = performance.now()

        try {
            const res = await fetch(url, { cache: "no-store" })
            const timeMs = Math.round(performance.now() - start)
            const text = await res.text()

            setStatus({
                ok: res.ok,
                code: res.status,
                text: text, // Full logs, no truncation
                timeMs,
            })
        } catch (err: any) {
            setError(err?.message || "Connection failed. Is the emulator running?")
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        check()
    }, [check])

    const copyLogs = () => {
        if (status?.text) {
            navigator.clipboard.writeText(status.text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const isUp = status?.ok

    return (
        <div className="flex flex-col h-full max-h-[90vh] border rounded-xl bg-background overflow-hidden shadow-sm">
            {/* Header - Fixed at top */}
            <div className="p-4 border-b bg-muted/30 flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Firebase Local Status
                    </h1>
                    <p className="text-xs text-muted-foreground font-mono truncate max-w-[300px]">
                        {url}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={check}
                        disabled={loading}
                        className="gap-2"
                    >
                        <RefreshCcw className={cn("w-4 h-4", loading && "animate-spin")} />
                        {loading ? "Checking..." : "Refresh"}
                    </Button>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {/* Status Badges */}
                <div className="flex items-center gap-4">
                    {status && (
                        <div className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold",
                            isUp ? "bg-green-500/10 text-green-600 border border-green-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"
                        )}>
                            {isUp ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                            {isUp ? "SYSTEM ONLINE" : "SYSTEM OFFLINE"}
                        </div>
                    )}

                    {status?.timeMs && (
                        <div className="text-xs font-mono bg-muted px-3 py-1.5 rounded-full border">
                            Latency: {status.timeMs}ms
                        </div>
                    )}
                </div>

                {error && (
                    <div className="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm flex gap-3 items-start">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <div>
                            <p className="font-bold">Connection Error</p>
                            <p className="opacity-90">{error}</p>
                        </div>
                    </div>
                )}

                {status && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg border bg-card">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">HTTP Code</p>
                            <p className="text-2xl font-mono font-bold">{status.code}</p>
                        </div>
                        <div className="p-4 rounded-lg border bg-card">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Response Time</p>
                            <p className="text-2xl font-mono font-bold text-blue-600">{status.timeMs}ms</p>
                        </div>
                    </div>
                )}

                {/* Logs Section */}
                {status?.text && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold uppercase text-muted-foreground italic">Full Response Logs</h3>
                            <Button variant="ghost" size="sm" onClick={copyLogs} className="h-8 px-2 text-xs gap-1">
                                {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                {copied ? "Copied" : "Copy"}
                            </Button>
                        </div>
                        <div className="relative group">
                            <pre className="rounded-lg bg-zinc-950 text-zinc-300 p-4 text-[11px] leading-relaxed font-mono overflow-auto max-h-[400px] border border-zinc-800 shadow-inner">
                                {status.text}
                            </pre>
                        </div>
                    </div>
                )}
                {isUp && (
                    <div className="space-y-3 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold uppercase text-muted-foreground italic tracking-tight">
                                Read-Only Preview
                            </h3>
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                            >
                                Interact in new tab <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="relative rounded-xl border overflow-hidden shadow-lggroup">
                            <iframe
                                src={url}
                                title="Local Firebase Preview"
                                className="w-full h-200 pointer-events-none select-none grayscale-[0.2]"
                                sandbox="allow-scripts allow-same-origin"
                            />

                            <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors" />

                            <div className="absolute top-2 right-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                <AlertCircle className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic">
                            * Interactive elements are disabled. Click "Open in new tab" to manage Firebase.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}