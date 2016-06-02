/**
 * @swagger
 * resourcePath: /v1
 * description: All about API
 */
 
/**
 * @swagger
 * path: /v1/login
 * operations:
 *   -  httpMethod: GET
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: login
 *      nickname: login
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: String
 *        - name: password
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: Int
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
 *         type: Int
 *       questionnaire_1:
 *         type: Int
 *       questionnaire_2:
 *         type: Int
 *       questionnaire_3:
 *         type: Int
 *       questionnaire_4:
 *         type: Int
 */