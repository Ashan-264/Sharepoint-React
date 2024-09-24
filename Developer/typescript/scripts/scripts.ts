class Something{
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

class SomethingElse extends Something{}