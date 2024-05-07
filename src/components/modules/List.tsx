import AccordianBtn from "./AccordianBtn";

export default function List({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <dl>
      <dt className="flex mt-4 justify-between font-ManRope font-semibold items-center">
        {children}

        <AccordianBtn showOpen={description != undefined} />
      </dt>
      {description && (
        <dd className="text-[#617275] mt-4 text-xs font-ManRope">
          {description}
        </dd>
      )}
    </dl>
  );
}
