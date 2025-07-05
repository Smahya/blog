export const Badge = ({ label }: { label: string }) => {
  return (
    <span className="bg-blue-50 dark:bg-neutral-600 text-blue-600 dark:text-blue-50 px-3 py-1 rounded-md text-sm capitalize">
      {label}
    </span>
  );
};
