const SUPABASE_URL = 'https://zcwghasajjcnjalirtgv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjd2doYXNhampjbmphbGlydGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg5MTEsImV4cCI6MTk2Nzg3NDkxMX0.PABjBwN_OcjQPMnybnEw2Gb1TCQAlLw_oz348jM0rSw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function deleteParticipant(id) {
    const response = await client.from('participants').delete().eq('id', id);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
