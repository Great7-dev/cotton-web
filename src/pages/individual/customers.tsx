import frame1 from "../../assets/Frame 36960.png";
import frame2 from "../../assets/Frame 36967.png";
import frame3 from "../../assets/Frame 36960.png";
import frame4 from "../../assets/Frame 36962.png";
import frame5 from "../../assets/Frame 36966.png";
import frame6 from "../../assets/Frame 36967.png";
import frame7 from "../../assets/bw.png";
import frame8 from "../../assets/Frame 36958.png";
import frame9 from "../../assets/Frame 36964.png";
import frame10 from "../../assets/Frame 36964.png";
import frame11 from "../../assets/Frame 36965.png";
import frame12 from "../../assets/Frame 36961.png";

const providers = [
  { name: "Oluwaseun Oladipo", title: "Brand Influencer", image: frame1 },
  { name: "Ifechukwu Uzo", title: "Lawyer", image: frame2 },
  { name: "Firdausi Yahaya", title: "Brand Influencer", image: frame3 },
  { name: "Ayi Adekola", title: "Backend Engineer", image: frame4 },
  { name: "Tari Awolowo", title: "Photographer", image: frame5 },
  { name: "Ijeoma Ike", title: "Fashion Designer", image: frame6 },
  { name: "Adeola Babalola", title: "Auto Mechanic", image: frame8 },
  { name: "Chinedu Anozie", title: "Digital Artist", image: frame10 }, // Placeholder
  { name: "Chijioke Anozie", title: "Child Development Coach", image: frame9 }, // Placeholder
  { name: "Lizzie", title: "Talent Coach", image: frame7 }, // Placeholder
  { name: "Anthony Jacobs", title: "Music Producer", image: frame11 }, // Placeholder
  { name: "Mary Uche", title: "Social Media Influencer", image: frame12 }, // Placeholder
];

export default function Customers() {
  const PersonCard: React.FC<{
    name: string;
    title: string;
    image: string | null;
  }> = ({ name, title, image }) => (
    <div className="bg-[#F2FDF7] p-4 rounded-[12px] relative h-48">
      <div className="absolute top-3 left-3 z-10">
        <div className="font-bold  text-[#0B4627] ">{name}</div>
        <div className="text-xs text-[#178C4E]">{title}</div>
      </div>
      {image && (
        <div className="absolute bottom-0 right-0">
          <img src={image} alt={name} className="w-32 h-32 object-cover" />
        </div>
      )}
    </div>
  );

  // MessageBlock component for the main text elements
  const MessageBlock: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center justify-center h-48">
      <span className="font-medium text-[80px] text-center font-['InterDisplay']">
        {text}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {/* Row 1 */}
        <PersonCard {...providers[0]} />
        <MessageBlock text="400+" />
        <PersonCard {...providers[1]} />
        <PersonCard {...providers[2]} />

        {/* Row 2 */}
        <PersonCard {...providers[3]} />
        <PersonCard {...providers[4]} />
        <MessageBlock text="Providers" />
        <PersonCard {...providers[5]} />

        {/* Row 3 */}
        <PersonCard {...providers[6]} />
        <MessageBlock text="Ready" />
        <PersonCard {...providers[7]} />
        <PersonCard {...providers[8]} />

        {/* Row 4 */}
        <PersonCard {...providers[9]} />
        <PersonCard {...providers[10]} />
        <MessageBlock text="For You" />
        <PersonCard {...providers[11]} />
      </div>
    </div>
  );
}
