
interface ServiceCardProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
}
export default function ServiceCard({ icon: Icon,
    iconBg,
    iconColor,
    title,
    description, }: ServiceCardProps) {
    return (

        <div className="bg-white w-min-[230px] w-full flex justify-start gap-3 items-center rounded-[20px] px-[26px] py-[20px]">
            {/* icon */}
            <div className="bg-[#E7EDFF] rounded-full flex justify-center items-center p-[15px]" style={{ backgroundColor: iconBg }}>
                <Icon className="text-[#396AFF] fill-current" style={{ color: iconColor }} />
            </div>
            <div className="whitespace-nowrap md:whitespace-normal">
                <h1 className="text-base font-medium">{title}</h1>
                <p className="text-[#718EF] font-normal text-xs">{description}</p>
            </div>
        </div>
    )
}