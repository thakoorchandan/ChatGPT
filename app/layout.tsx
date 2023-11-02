import "server-only";
import ".//globals.css";

export const metadata = {
  title: "Nimble.AI",
  description: "A ChatGPT clone with enhanced features for makers.",
};

import JotaiProvider from "@/components/providers/jotai-provider";
import OpenAIKeyProvider from "@/components/providers/openai-key-provider";
import { ThemeProviderClient } from "@/components/providers/theme-provider";
import SupabaseAuthProvider from "@/lib/supabase/supabase-auth-provider";
import SupabaseProvider from "@/lib/supabase/supabase-provider";
import { createClient } from "@/lib/supabase/supabase-server";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data: { session }} = await supabase.auth.getSession();

  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <JotaiProvider>
            <SupabaseAuthProvider serverSession={session}>
              <OpenAIKeyProvider serverKey={process.env.OPENAI_API_KEY ?? ""}>
                <ThemeProviderClient>{children}</ThemeProviderClient>
              </OpenAIKeyProvider>
            </SupabaseAuthProvider>
          </JotaiProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
