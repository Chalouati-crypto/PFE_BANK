import supabase from "./supabase";

export async function getClients() {
  let { data, error } = await supabase.from("Clients").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("employees could not be loaded");
  }
  return data;
}
export async function deleteClient(id) {
  const { error } = await supabase.from("Clients").delete().eq("id", id);
  if (error) {
    console.error(error.message);
    throw new Error("employees could not be loaded");
  }
}
export async function createClient(client) {
  const { data, error } = await supabase
    .from("Employees")
    .insert([
      {
        fullName: client.fullName,
        birthDate: client.birthDate,
        adress: client.adress,
        contactInfo: client.contactInfo,
        govId: client.govId,
        ssn: client.ssn,
        salary: client.salary,
        bankAccInfo: client.bankAccInfo,
        proofOfAdress: client.proofOfAdress,
        intro: client.intro,
      },
    ])
    .select();
  if (error) {
    console.error(error.message);
    throw new Error("client could not be created");
  }
  return data;
}
