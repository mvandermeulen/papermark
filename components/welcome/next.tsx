import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  File as DocumentIcon,
  Presentation as PresentationChartBarIcon,
} from "lucide-react";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import NotionIcon from "@/components/shared/icons/notion";

export default function Next() {
  const router = useRouter();
  return (
    <motion.div
      className="z-10 mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex flex-col items-center space-y-10 text-center"
      >
        <p className="text-2xl font-bold tracking-tighter text-foreground">
          Papermark
        </p>
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
          Which document do you want to share today?
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid w-full grid-cols-1 divide-y divide-border text-foreground rounded-md border border-border md:grid-cols-3 md:divide-x"
      >
        <button
          onClick={() =>
            router.push({
              pathname: "/welcome",
              query: {
                type: "pitchdeck",
              },
            })
          }
          className="flex flex-col items-center justify-center overflow-hidden p-5 space-y-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10 min-h-[200px]"
        >
          <PresentationChartBarIcon className="h-auto pointer-events-none w-12 sm:w-12" />
          <p>Pitchdeck</p>
        </button>
        <button
          onClick={() =>
            router.push({
              pathname: "/welcome",
              query: {
                type: "document",
              },
            })
          }
          className="flex flex-col items-center justify-center overflow-hidden p-5 space-y-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10 min-h-[200px]"
        >
          <DocumentIcon className="h-auto pointer-events-none w-12 sm:w-12" />
          <p>Another document</p>
        </button>
        <button
          onClick={() =>
            router.push({
              pathname: "/welcome",
              query: {
                type: "notion",
              },
            })
          }
          className="flex flex-col items-center justify-center overflow-hidden p-5 space-y-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10 min-h-[200px]"
        >
          <NotionIcon className="h-auto pointer-events-none w-12 sm:w-12" />
          <p>Notion Page</p>
        </button>
      </motion.div>

      <motion.div variants={STAGGER_CHILD_VARIANTS} className="text-center">
        <button
          className="text-center text-sm text-muted-foreground underline-offset-4 transition-all hover:text-gray-800 hover:dark:text-muted-foreground/80 hover:underline"
          onClick={() =>
            router.push({
              pathname: "/welcome",
              query: {
                type: "dataroom",
              },
            })
          }
        >
          Looking to create and share a full dataroom?
        </button>
      </motion.div>
    </motion.div>
  );
}
