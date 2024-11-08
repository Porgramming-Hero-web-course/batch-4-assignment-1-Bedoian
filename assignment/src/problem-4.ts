{
    // ---------------------problem-04-------------------

    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Rectangle = {
        shape: 'rectanle';
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (object: Shape): number => {
        if (object.shape === 'circle') {
            const circleArea = Math.PI * object.radius * object.radius;
            return circleArea
        } else {
            const rectangleArea = object.height * object.width
            return rectangleArea
        }
    }

    // console.log(calculateShapeArea({ shape:'rectanle',width:5,height:5}));






    // 
}