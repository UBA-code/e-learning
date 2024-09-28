import { Button } from "./ui/button";

interface SectionHeaderProps {
  title: string;
  description: string;
  buttonContent?: string;
  decoration?: "row" | "column";
}

export default function SectionHeader({
  title,
  description,
  buttonContent,
  decoration = "row",
}: SectionHeaderProps) {
  return (
    <div className="benefits-header space-y-4">
      <div className="title">
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>
      <div
        className={`space-y-4   ${
          decoration === "column"
            ? "sm:block"
            : "sm:space-x-20 sm:flex sm:items-center sm:justify-between"
        }`}
      >
        <p className="text-gray-500">{description}</p>
        {buttonContent ? (
          <Button className="bg-white py-6" variant={"outline"}>
            {buttonContent}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
