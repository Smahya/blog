import { Text } from "@/components";

export function Hero() {
  return (
    <section className="app-bg-secondary py-16">
      <div className="container">
        <Text variant="h1" className="">
          I Write About <span className="text-blue-primary">Frontends</span>
        </Text>
        <Text variant="body2" className="mt-2 text-neutral-600">
          These are my thoughts and insights on frontend development.
          <br />
          Maybe you will find something useful here.
        </Text>
      </div>
    </section>
  );
}
