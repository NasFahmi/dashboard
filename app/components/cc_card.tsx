import { assets } from "~/assets/asset";

export default function CreditCardCard({
    isTextWhite,
    balance,
    cardHolder,
    validThru,
    cardNumber,
    left_gradient,
    right_gradient,
}: {
    isTextWhite: boolean;
    balance: string;
    cardHolder: string;
    validThru: string;
    cardNumber: string;
    left_gradient: string;
    right_gradient: string;
}) {
    return (
        <div
            className={`font-lato rounded-[15px] min-w-[265px] md:min-w-[231px] w-full ${isTextWhite ? "text-white" : "text-black"}`}
            style={{
                backgroundImage: `linear-gradient(to right, ${left_gradient}, ${right_gradient})`,
            }}
        >
            <div className="flex flex-col items-center justify-center px-5 py-[16px]">
                <div className="flex items-center justify-between w-full mb-6">
                    <div>
                        <p className="text-[11px]">Balance</p>
                        <p className="text-base">${balance}</p>
                    </div>
                    <img src={assets.img_chip_card} alt="chip card" className="w-6 h-6" />
                </div>

                <div className="flex items-center w-full gap-[57px]">
                    <div>
                        <p className={`text-[10px] opacity-70 ${isTextWhite ? "text-white" : "text-black"}`}>
                            Card Holder
                        </p>
                        <h1 className={`text-[13px] ${isTextWhite ? "text-white" : "text-black"}`}>
                            {cardHolder}
                        </h1>
                    </div>
                    <div>
                        <p className={`text-[10px] opacity-70 ${isTextWhite ? "text-white" : "text-black"}`}>
                            VALID THRU
                        </p>
                        <h1 className={`text-[13px] ${isTextWhite ? "text-white" : "text-black"}`}>
                            {validThru}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between px-5 py-4 items-center h-[51px]"
                style={{
                    backgroundImage: "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.2))"
                }}>
                <h1>{cardNumber}</h1>
                <assets.ic_master_card />
            </div>
        </div>
    );
}
