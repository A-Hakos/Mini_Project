import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Link,
} from "@heroui/react";

export default function CardGeneral({
  title,
  desc,
  content,
  footer,
  linkDetail,
  imageUrl,
}) {
  return (
    <>
      <Card className="w-20 md:w-1/2 lg:w-1/5 p-4 mb-4 shadow-lg rounded-lg mr-12">
        <CardHeader className="mb-4 relative overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-100 h-100 object-cover"
          />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter>
          {footer}

          <Link>
            {linkDetail} <Link.Icon aria-hidden="true" />
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
