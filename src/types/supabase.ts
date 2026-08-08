// Placeholder for generated Supabase database types.
//
// Once the Supabase project exists, generate real types with:
//   npx supabase gen types typescript --project-id <project-id> > src/types/supabase.ts
//
// Until then, this keeps `Database` importable so client/server helpers
// can be typed as `createClient<Database>()` without breaking the build.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
