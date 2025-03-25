import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functionsstsgsfg
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here latersergte */
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
