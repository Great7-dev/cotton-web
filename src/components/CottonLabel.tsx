import { Icon } from "@iconify/react";

const CottonLabel = () => {
  return (
    <div className="rounded-md border border-foreground-200 inline-flex items-center justify-center space-x-1 px-1 py-2">
      <Icon className="text-primary" icon="ri:flashlight-fill" />
      <div className="text-xs space-x-1">
        <span className="font-normal text-foreground-600">Powered by</span>
        <span className="text-foreground">Cotton</span>
      </div>
    </div>
  );
};

export default CottonLabel;
