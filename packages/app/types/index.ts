import { addOnSchema, planSchema } from "app/schema/index"

import { z } from "zod"

export type addOn = z.infer<typeof addOnSchema>
export type plans = z.infer<typeof planSchema>
