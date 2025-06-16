
import { Link } from "react-router";
import { assets } from "~/assets/asset";

interface DataServiceProps {
    icon : React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconbg: string;
    tittleType: string;
    titleDesc: string;
    iconColor: string;
    detailLink: string;
}

export default function DataService({
    icon:Icon,
    iconbg,
    tittleType,
    titleDesc,
    iconColor,
    detailLink,
}: DataServiceProps) {
    return (
        <>
            {/* items */}
            <div className="flex items-center">
                {/* icon */}
                <div className="bg-[#E7EDFF]  rounded-[15px] p-[13px]" style={{ backgroundColor: iconbg }}>
                    <Icon className="fill-current " style={{ color: iconColor }} />
                </div>

                {/* data */}
                <div className="flex flex-row flex-wrap items-center justify-between w-full gap-2 ml-4">
                    {/* bussines loan */}
                    <div className="flex flex-col items-start gap-1">
                        <h5 className="text-[#232323] font-medium text-xs">{tittleType}</h5>
                        <p className="text-[#718EBF] text-xs">{titleDesc}</p>
                    </div>

                    {/* lorem ipsum */}
                    <div className="flex-col items-start hidden gap-1 md:flex">
                        <h5 className="text-[#232323] font-medium text-xs">Lorem Ipsum</h5>
                        <p className="text-[#718EBF] text-xs">Many publishing</p>
                    </div>

                    {/* lorem ipsum */}
                    <div className="flex-col items-start hidden gap-1 md:flex">
                        <h5 className="text-[#232323] font-medium text-xs">Lorem Ipsum</h5>
                        <p className="text-[#718EBF] text-xs">Many publishing</p>
                    </div>
                    {/* lorem ipsum */}
                    <div className="flex-col items-start hidden gap-1 md:flex">
                        <h5 className="text-[#232323] font-medium text-xs">Lorem Ipsum</h5>
                        <p className="text-[#718EBF] text-xs">Many publishing</p>
                    </div>

                    {/* view detail */}
                    <Link
                        to={detailLink}
                        className="hover:text-[#1814F3] h-[30px] text-[#718EBF] border-[#718EBF] text-xs border hover:border-[#1814F3] rounded-full max-w-[120px] w-full  flex items-center justify-center  duration-300 ease-in-out"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </>
    );
}
