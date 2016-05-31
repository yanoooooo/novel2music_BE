/**
 * @swagger
 * resourcePath: /v1
 * description: All about API
 */
 
/**
 * @swagger
 * path: /v1/user
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: user
 *      nickname: user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: Your username
 *          paramType: body
 *          required: true
 *          type: user
 *          dataType: object
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

exports.user = function (req, res) {
  /*var user = {};
  user.username = req.param('username');
  user.age = req.param('age');
  user.sex = req.param('sex');
  user.password = req.param('password');
  user.questionnaire_1 = req.param('questionnaire_1');
  user.questionnaire_2 = req.param('questionnaire_2');
  user.questionnaire_3 = req.param('questionnaire_3');
  user.questionnaire_4 = req.param('questionnaire_4');
  res.json(user);
  res.status(200).json({ message: 'This is Swagger /v1/user POST method.' });*/
};

/**
 * @swagger
 * models:
 *   user:
 *     id: user
 *     properties:
 *       name:
 *         type: String
 *       age:
 *         type: Int
 *       sex:
 *         type: String
 *       password:
 *         type: String
 *       questionnaire_1:
 *         type: Int
 *       questionnaire_2:
 *         type: Int
 *       questionnaire_3:
 *         type: Int
 *       questionnaire_4:
 *         type: Int
 */