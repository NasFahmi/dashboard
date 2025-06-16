interface CardSettingItemProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export default function CardSettingItem({
  icon: Icon, // ✅ Rename ke PascalCase untuk dipakai sebagai komponen
  iconBg,
  iconColor,
  title,
  description,
}: CardSettingItemProps) {
  return (
    <>
      {/* items */}
      <div className="flex items-center">
        {/* icon */}
        <div className="bg-[#E7EDFF] rounded-[15px] p-[13px]" style={{ backgroundColor: iconBg }}>
          <Icon className="text-[#396AFF] fill-current" style={{ color: iconColor }} />
        </div>

        {/* data */}
        <div className="flex flex-row flex-wrap items-center justify-between w-full gap-2 ml-4">
          <div className="flex flex-col items-start">
            <h5 className="text-[#232323] text-xs">{title}</h5>
            <p className="text-[#718EBF] text-xs">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
