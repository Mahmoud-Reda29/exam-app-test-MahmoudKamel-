import { inter } from "@fonts";
import { cn } from "@lib/utils/cn.utils";
import BookOpenCheckIcon from "@public/icons/book-open-check";
import FolderCodeIcon from "@public/icons/folder-code";
import InputFormIcon from "@public/icons/input-form";
import MindIcon from "@public/icons/mind";

export default function PanelCover() {
       return (
       <div
              //? I recommend using padding 20 instead of p-32, as 20 (~128px) is closer to the source's 131px for a better visual match.
              className={cn("cover | h-auto w-1/2 p-20 flex flex-col items-start justify-start")}
              style={{ background: "url('/images/Panel.webp') center/cover" }}
       >
              
              <span className={cn("mb-title-panel-cover flex items-center gap-2 text-xl font-semibold text-blue-600")}><FolderCodeIcon /> Exam App</span>
              <div>
                     <h2
                            className={cn(`mb-16 text-3xl font-bold ${inter.className}`)}
                     >
                            Empower your learning journey with our smart exam platform.
                     </h2>

                     <ul className="flex flex-col gap-9">
                            {/* item Tailored Diplomas */}
                            <li className="flex items-start gap-5">
                                   <MindIcon size="45" />
                                   <div>
                                          <h3 className={cn("mb-3 text-blue-600 text-xl font-semibold")}>Tailored Diplomas</h3>
                                          <p>Choose from specialized tracks like Frontend, Backend, and Mobile Development.</p>
                                   </div>
                            </li>

                            {/* item Focused Exams */}
                            <li className="flex items-start gap-5">
                                   <BookOpenCheckIcon size="45" />
                                   <div>
                                          <h3 className={cn("mb-3 text-blue-600 text-xl font-semibold")}>Focused Exams</h3>
                                          <p>Access topic-specific tests including HTML, CSS, JavaScript, and more.</p>
                                   </div>
                            </li>

                            {/* item Smart Multi-Step Forms */}
                            <li className="flex items-start gap-5">
                                   <InputFormIcon size="45" />
                                   <div>
                                          <h3 className={cn("mb-3 text-blue-600 text-xl font-semibold")}>Smart Multi-Step Forms</h3>
                                          <p>Choose from specialized tracks like Frontend, Backend, and Mobile Development.</p>
                                   </div>
                            </li>
                     </ul>
              </div>
       </div>
       );
}
