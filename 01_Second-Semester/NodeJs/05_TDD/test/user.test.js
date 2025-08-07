const user = require('../src/user')

const userObj = user.getUserDetails()


test('User Object is Returned Properly', ()=>{

    expect(userObj.firstName).toBe("Johnson")
    expect(userObj.lastName).toBe("Adeleke")
    expect(userObj.age).toBe(24)
    expect(userObj).toHaveProperty("age")
    expect(userObj.age).toBeLessThan(30)
})