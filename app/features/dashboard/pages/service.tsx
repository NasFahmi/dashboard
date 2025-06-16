import { assets } from "~/assets/asset";
import DataService from "~/components/data_service";
import ServiceCard from "~/components/service_card";

export default function ServicePage() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-1 mr-[25px] mt-[25px] md:grid md:grid-cols-3 flex-row gap-6  overflow-x-auto md:overflow-x-hidden pl-[21px] md:pr-[21px] no-scrollbar">
                <ServiceCard icon={assets.ic_insurance} iconBg={"#E7EDFF"} iconColor={"#396AFF"} title={"Life Insurance"} description={"Unlimited protection"} />
                <ServiceCard icon={assets.ic_shopping} iconBg={"#FFF5D9"} iconColor={"#FFBB38"} title={"Shopping"} description={"Buy. Think. Grow"} />
                <ServiceCard icon={assets.ic_safety} iconBg={"#DCFAF8"} iconColor={"#16DBCC"} title={"Safety"} description={"We are your allies"} />
            </div>
            {/* chart */}
            <div className="mx-[21px] gap-[25px]">
                {/* chart */}
                <h1 className="text-lg font-bold text-[#343C6A]  mt-5 mb-3">Bank Services List</h1>
                {/* card list */}
                <div className="w-full">
                    <div className="bg-white rounded-[15px] p-4 flex flex-col gap-4">
                        <DataService iconbg={"#FFE0EB"} iconColor={"#FF82AC"} detailLink={"/detail"} tittleType={"Business loans"} titleDesc={"It is a long established "} icon={assets.ic_bussines_loan} />
                        <DataService iconbg={"#FFF5D9"} iconColor={"#FFBB38"} detailLink={"/detail"} tittleType={"Checking accounts"} titleDesc={"It is a long established "} icon={assets.ic_suitcase} />
                        <DataService iconbg={"#FFE0EB"} iconColor={"#FF82AC"} detailLink={"/detail"} tittleType={"Savings accounts"} titleDesc={"It is a long established "} icon={assets.ic_investment} />
                        <DataService iconbg={"#E7EDFF"} iconColor={"#396AFF"} detailLink={"/detail"} tittleType={"Debit and credit cards"} titleDesc={"It is a long established "} icon={assets.ic_person} />
                        <DataService iconbg={"#DCFAF8"} iconColor={"#16DBCC"} detailLink={"/detail"} tittleType={"Life Insurance"} titleDesc={"It is a long established "} icon={assets.ic_safety} />
                        <DataService iconbg={"#FFE0EB"} iconColor={"#FF82AC"} detailLink={"/detail"} tittleType={"Business loans"} titleDesc={"It is a long established "} icon={assets.ic_bussines_loan} />
                    </div>
                </div>
            </div>
        </div>
    )
}