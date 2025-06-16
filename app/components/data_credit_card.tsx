
import { Link } from "react-router";
import { assets } from "~/assets/asset";

interface DataCreditCardProps {
  iconbg: string;
  iconColor: string;
  cardType: string;
  bank: string;
  cardNumber: string;
  nameCard: string;
  detailLink: string;
}

export default function DataCreditCard({
  iconbg,
  iconColor,
  cardType,
  bank,
  cardNumber,
  nameCard,
  detailLink,
}: DataCreditCardProps) {
  return (
    <>
      {/* items */}
      <div className="flex items-center">
        {/* icon */}
        <div className="bg-[#E7EDFF]  rounded-[15px] p-[13px]" style={{ backgroundColor: iconbg }}>
          <assets.ic_credit_card className="text-[#396AFF] fill-current" style={{ color: iconColor }} />
        </div>

        {/* data */}
        <div className="flex flex-row flex-wrap items-center justify-between w-full gap-2 ml-4">
          {/* card type */}
          <div className="flex flex-col items-start">
            <h5 className="text-[#232323] text-xs">Card Type</h5>
            <p className="text-[#718EBF] text-xs">{cardType}</p>
          </div>

          {/* bank */}
          <div className="flex flex-col items-start">
            <h5 className="text-[#232323] text-xs">Bank</h5>
            <p className="text-[#718EBF] text-xs">{bank}</p>
          </div>

          {/* card number */}
          <div className="flex-col items-start hidden md:flex">
            <h5 className="text-[#232323] text-xs">Card Number</h5>
            <p className="text-[#718EBF] text-xs">{cardNumber}</p>
          </div>

          {/* name in card */}
          <div className="flex-col items-start hidden md:flex">
            <h5 className="text-[#232323] text-xs">Namain Card</h5>
            <p className="text-[#718EBF] text-xs">{nameCard}</p>
          </div>

          {/* view detail */}
          <Link
            to={detailLink}
            className="text-[#1814F3] text-xs hover:underline duration-300 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
