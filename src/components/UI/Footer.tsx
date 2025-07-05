import { Text } from "../Text";

export function Footer() {
  return (
    <footer className="app-ui-bg border-t border-custom py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Text>© 2025 Salma. All rights reserved.</Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
