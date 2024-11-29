"use client";

import { WifiHigh, WifiLow } from "lucide-react";
import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge
        variant="outline"
        className="bg-yellow-600 text-white border-none cursor-pointer"
      >
        <WifiLow className=" flex w-5 mr-1 mb-1 h-5" />
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge
      variant="outline"
      className="bg-emerald-600 text-white border-none cursor-pointer"
    >
      <WifiHigh className=" flex w-5 mr-1 mb-1 h-5" />
      Live: Real-time updates
    </Badge>
  );
};
