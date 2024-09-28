// import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
// import { Button } from "@/components/ui/button";

// interface OurCoursesCardProps {
//   img: string;
//   tags: string[];
//   autor: string;
//   title: string;
//   content: string;
// }

// export function OurCoursesCard({
//   img,
//   tags,
//   autor,
//   title,
//   content,
// }: OurCoursesCardProps) {
//   return (
//     <Card className="p-4">
//       <CardHeader className="flex-col space-y-6">
//         <div
//           className={`img bg-cover bg-center w-full h-[200px] rounded-lg`}
//           style={{ backgroundImage: `url(${img})` }}
//         ></div>
//         <div className="tags space-x-3 self-start">
//           {tags.map((tag) => (
//             <span className="text-sm font-light border-1 rounded px-3 py-2">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="autor self-start">{autor}</div>
//       </CardHeader>
//       <CardBody className="space-y-3">
//         <div className="title text-xl font-medium">{title}</div>
//         <div className="content font-light">{content}</div>
//       </CardBody>
//       <CardFooter>
//         <Button
//           variant={"outline"}
//           className="bg-[#F7F7F8] w-full py-6 font-medium border-gray-200"
//         >
//           Get It Now
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }
