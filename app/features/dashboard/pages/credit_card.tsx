import { Link } from "react-router";
import { assets } from "~/assets/asset";
import CardSettingItem from "~/components/card_setting_item";
import CreditCardCard from "~/components/cc_card";
import DataCreditCard from "~/components/data_credit_card";
import PieChartStatisitcs from "~/components/pie_chart";


export default function CreditCardPage() {
    return (
        <div className="flex flex-col w-full">
            {/* card */}
            <h1 className="text-lg font-bold text-[#343C6A] ml-[21px] mt-[25px] mb-3">My Card</h1>
            <div className="flex flex-1 md:grid md:grid-cols-3 flex-row gap-6  overflow-x-auto md:overflow-x-hidden pl-[21px] md:pr-[21px] no-scrollbar">
                <CreditCardCard isTextWhite={true} balance={"5,756"} cardHolder={"Eddy Cusuma"} validThru={"12/22"} cardNumber={"3778 **** **** 1234"} left_gradient={"#2D60FF"} right_gradient={"#539BFF"} />
                <CreditCardCard isTextWhite={true} balance={"5,756"} cardHolder={"Eddy Cusuma"} validThru={"12/22"} cardNumber={"3778 **** **** 1234"} left_gradient={"#4C49ED"} right_gradient={"#0A06F4"} />
                <CreditCardCard isTextWhite={false} balance={"5,756"} cardHolder={"Eddy Cusuma"} validThru={"12/22"} cardNumber={"3778 **** **** 1234"} left_gradient={"#ffffff"} right_gradient={"#ffffff"} />
            </div>
            {/* chart */}
            <div className="mx-[21px] grid grid-cols-1 md:grid-cols-3 gap-[25px]">
                {/* chart */}
                <div className="col-span-1">
                    <h1 className="text-lg font-bold text-[#343C6A]  mt-5 mb-3">Card Expense Statistics</h1>
                    <div className="w-full col-span-1 py-5 bg-white px-15">
                        <PieChartStatisitcs />
                    </div>
                </div>
                {/* card list */}
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-lg font-bold text-[#343C6A] mt-5 mb-3">Card List</h1>
                    <div className="w-full">
                        <div className="bg-white rounded-[15px] p-4 flex flex-col gap-4">
                            <DataCreditCard iconbg={"#E7EDFF"} iconColor={"#396AFF"} cardType={"Secoundary"} bank={"BRC Bank"} cardNumber={"**** **** 5600"} nameCard={"William "} detailLink={"/detail"} />
                            <DataCreditCard iconbg={"#FFE0EB"} iconColor={"#FF82AC"} cardType={"Secoundary"} bank={"BRC Bank"} cardNumber={"**** **** 5600"} nameCard={"William "} detailLink={"/detail"} />
                            <DataCreditCard iconbg={"#FFF5D9"} iconColor={"#FFBB38"} cardType={"Secoundary"} bank={"BRC Bank"} cardNumber={"**** **** 5600"} nameCard={"William "} detailLink={"/detail"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* new card */}
            <div className="mx-[21px] grid grid-cols-1 md:grid-cols-3 gap-[25px]">
                {/* chart */}
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-lg font-bold text-[#343C6A]  mt-5 mb-3">Add New Card</h1>
                    <div className="w-full col-span-1 py-[30px] bg-white px-[27px] rounded-[20px]">
                        <p className="text-[#718EBF] text-sm md:text-base">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
                        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row">

                            {/* card type */}
                            <div className="flex flex-col w-full gap-2 md:w-1/2">
                                <h1 className="text-xs text-[#232323]">Card Type</h1>
                                <input
                                    type="text"
                                    placeholder="Classic"
                                    className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                                />
                            </div>
                            {/* card type */}
                            <div className="flex flex-col w-full gap-2 md:w-1/2">
                                <h1 className="text-xs text-[#232323]">Name On Card</h1>
                                <input
                                    type="text"
                                    placeholder="My Card"
                                    className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row">

                            {/* card type */}
                            <div className="flex flex-col w-full gap-2 md:w-1/2">
                                <h1 className="text-xs text-[#232323]">Card Number</h1>
                                <input
                                    type="text"
                                    placeholder="**** **** **** ****"
                                    className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                                />
                            </div>
                            {/* card type */}
                            <div className="flex flex-col w-full gap-2 md:w-1/2">
                                <h1 className="text-xs text-[#232323]">Expiration Date</h1>
                                <input
                                    type="text"
                                    placeholder="25 January 2025"
                                    className="w-full border-1 bg-white rounded-[15px] flex py-3 px-5 gap-2.5 border-[#DFEAF2] outline-none focus:border-[#343C6A] text-[#8BA3CB] text-[13px]"
                                />
                            </div>
                        </div>
                        <button type="submit" className=" cursor-pointer w-full md:max-w-[120px] bg-[#1814F3] text-white rounded-[9px] py-3 px-5 mt-4 text-sm md:text-base font-semibold hover:bg-[#1814f3b4] transition-colors duration-200 ease-in-out  ">
                            Add Card
                        </button>
                    </div>
                </div>
                {/* card list */}
                <div className="col-span-1 ">
                    <h1 className="text-lg font-bold text-[#343C6A]  mt-5 mb-3">Card Setting</h1>
                    <div className="w-full">
                        <div className="bg-white rounded-[15px] p-4 flex flex-col gap-4">
                            <CardSettingItem description="Instantly block your card" title="Block Card" iconBg="#FFF5D9" iconColor="#FFBB38" icon={assets.ic_credit_card} />
                            <CardSettingItem description="Choose another pin code" title="Change Pin Code" iconBg="#E7EDFF" iconColor="#396AFF" icon={assets.ic_padlock} />
                            <CardSettingItem description="Withdraw without any card" title="Add to Google Pay" iconBg="#FFE0EB" iconColor="#FF82AC" icon={assets.ic_google} />
                            <CardSettingItem description="Withdraw without any card" title="Add to Apple Pay" iconBg="#DCFAF8" iconColor="#16DBCC" icon={assets.ic_apple} />
                            <CardSettingItem description="Withdraw without any card" title="Add to Apple Store" iconBg="#DCFAF8" iconColor="#16DBCC" icon={assets.ic_apple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}