function hobbies (...hobby : string[]) {
    hobby.forEach(hobby => {
        console.log(`I love ${hobby}!`);
        
    });
}
hobbies("Coding", "Chess", "Horseriding")