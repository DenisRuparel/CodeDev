import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const HoverIcon = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Info className="w-5 h-5 text-[#ca8c2f]" />
            </HoverCardTrigger>
            <HoverCardContent className="w-85 bg-gradient-to-r from-[#1a1a2e] to-[#0a0a0f] text-white">
                <div className="flex justify-between space-x-4">
                    <div
                        className="relative bg-gradient-ring-1 from-[#1a1a2e] to-[#0a0a0f] p-3 w-10 h-10 rounded-xl ring-1 
             ring-white/10 group-hover:ring-white/20 transition-all flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-xl transform group-hover:rotate-0 transition-transform duration-500">
                            {"</>"}
                        </span>
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@CodeDev</h4>
                        <p className="text-sm">
                            when you want to comment some code/program you should follow this format:
                            <br/>
                                <br />
                                Example: <br />
                                '''javascript       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # language name<br />
                                const name = "John"; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # code<br />
                                '''
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default HoverIcon
