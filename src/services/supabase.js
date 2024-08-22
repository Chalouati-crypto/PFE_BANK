import { createClient } from "@supabase/supabase-js";
/*
this file is used to initialise the supabase API and create a client to which we can start querying our database
*/
export const supabaseUrl = "https://uikecohyjbmenuzlsnun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpa2Vjb2h5amJtZW51emxzbnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNDc2MjIsImV4cCI6MjAzOTgyMzYyMn0.ewCA9Fj_htGOaOAgA8OcxzV_ONwzBfeOpka-UpBl5LM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
