import {
  Card,
  CardBody,
  CardHeader,
  Link as NextUiLink,
  CardFooter,
  Image,
} from "@nextui-org/react";

export default function AmazonBook() {
  return (
    <div className="relative">
      {/* //max-w-[400px] */}
      <Card className="top-4 mx-auto w-[60%] rounded-2xl bg-white/50 shadow-xl drop-shadow-2xl backdrop-blur-lg lg:max-w-[750px] portrait:w-[80%]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={300}
            radius="sm"
            src="https://m.media-amazon.com/images/I/811kEWBkJAL._SY385_.jpg"
            width={300}
          />
          <div className="flex flex-col gap-24">
            <p className="text-lg font-bold">Geometry Nodes 3.3 by Tutorials</p>
            <p className="text-small text-default-500">
              A tutorial based approach to learning Blender&apos;s Geometry
              Nodes.
            </p>
          </div>
        </CardHeader>

        <hr className="mx-auto w-[90%]" />
        <CardBody>
          <p className="first-letter:ml-2">
            This book is a tutorial based approach to learning the Geometry
            Nodes system that ships with Blender 3.3. It allows you to create
            dynamic shapes by using nodes. This will allow you to create
            extraordinary, flexible and modifiable geometrical shapes. You will
            then be able to parametrically alter the shape of these objects by
            making changes thru the modifier interface.
          </p>
        </CardBody>

        <hr className="mx-auto w-[90%]" />
        <CardFooter>
          <NextUiLink
            color="primary"
            isExternal
            showAnchorIcon
            href="https://www.amazon.com/Blender-3-3-Geometry-Nodes-Tutorials-ebook/dp/B0BFG6GYVN"
          >
            View my book on Amazon
          </NextUiLink>
        </CardFooter>
      </Card>
    </div>
  );
}
