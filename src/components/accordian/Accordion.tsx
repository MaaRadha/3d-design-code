import { useState, useEffect } from "react";
import { accordiaonData } from "../../helpers/accordionData";
import { HiPlus } from "react-icons/hi";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { motion } from "motion/react";

export interface AccordionData {
  id: number;
  title: string;
  content: string;
}
const Accordion = () => {
  const [open, setopen] = useState<number | null>(null);

  const toggle = (item: AccordionData): void => {
    setopen((prevOpen): number | null =>
      prevOpen === item.id ? null : item.id
    );
  };
  useEffect(() => {}, [open]);

  return (
    <>
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6 py-10">
        <div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl text-center py-6 my-4 text-text-dark">
            Spør meg, og jeg vil gi deg en løsning
          </h3>
        </div>
        <div className="w-full container mx-auto max-w-md">
          {accordiaonData.map((item) => (
            <motion.div
              key={item.id}
              layout
              transition={{
                layout: { duration: 0.3, ease: "easeInOut" },
              }}
              className="border-b border-gray-300 p-4 cursor-pointer"
              onClick={() => toggle(item)}
            >
              {/* Accordion Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                {open === item.id ? (
                  <HiOutlineMinusSmall className="w-6 h-6 fill-current" />
                ) : (
                  <HiPlus className="w-6 h-6 fill-current" />
                )}
              </div>

              {/* Accordion Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  open === item.id
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2">{item.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
